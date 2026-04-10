import { describe, expect, it } from 'vitest';
import { render, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactNode } from 'react';
import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { RuntimeContext } from '../../lib/context.ts';
import { mockRuntime, stubJquery } from '../../lib/specHelpers.ts';
import { initDataFactory } from '../lib/specHelpers.tsx';
import App from './App.tsx';

const specRender = (component: ReactNode) => {
  const runtime = mockRuntime();
  const element = document.createElement('div');
  const screen = render(
    <React.StrictMode>
      <IntlProvider locale="en">
        <RuntimeContext.Provider value={{ runtime, element }}>
          {component}
        </RuntimeContext.Provider>
      </IntlProvider>
    </React.StrictMode>,
  );
  return { screen, runtime, element };
};

describe('App.tsx', () => {
  const { getLastDeferred, mockPost } = stubJquery();
  it('renders', () => {
    const { screen } = specRender(<App {...initDataFactory()} />);
    screen.getByLabelText('Variant');
  });
  it('dynamically shows the color selectors', async () => {
    const { screen } = specRender(
      <App {...initDataFactory({ variant: 'section' })} />,
    );
    // Section does not have any color pickers.
    await waitFor(() => expect(screen.queryAllByText(/color/i).length).toBe(0));
    const selector = screen.getByLabelText('Variant');
    fireEvent.change(selector, { target: { value: 'course' } });
    await waitFor(() =>
      expect(screen.queryAllByText(/color/i).length).toEqual(4),
    );
  });
  it('dynamically removes the color selectors', async () => {
    const { screen } = specRender(
      <App {...initDataFactory({ variant: 'course' })} />,
    );
    await waitFor(() =>
      expect(screen.queryAllByText(/color/i).length).toEqual(4),
    );
    const selector = screen.getByLabelText('Variant');
    fireEvent.change(selector, { target: { value: 'section' } });
    await waitFor(() => expect(screen.queryAllByText(/color/i).length).toBe(0));
  });
  it('submits changes to the server', async () => {
    const user = userEvent.setup();
    const { screen } = specRender(
      <App {...initDataFactory({ variant: 'course' })} />,
    );
    const displayName = screen.getByLabelText('Display Name');
    await user.clear(displayName);
    await user.type(displayName, 'My new block');
    const selector = screen.getByLabelText('Variant');
    fireEvent.change(selector, { target: { value: 'course' } });
    const mainHeaderColor = screen.getByLabelText('Main header color');
    fireEvent.change(mainHeaderColor, { target: { value: '#abc123' } });
    await user.click(screen.getByText('Save'));
    expect(mockPost).toHaveBeenCalledWith(
      '/handler/studio_save',
      JSON.stringify(
        initDataFactory({
          display_name: 'My new block',
          main_header_color: '#abc123',
        }),
      ),
    );
  });
  it('informs the runtime about the save status', async () => {
    const user = userEvent.setup();
    const { screen, runtime } = specRender(
      <App {...initDataFactory({ variant: 'course' })} />,
    );
    await user.click(screen.getByText('Save'));
    expect(runtime.notify).toHaveBeenCalledWith('save', { state: 'start' });
    expect(runtime.notify).toHaveBeenCalledOnce();
    const lastDeferred = getLastDeferred();
    expect(lastDeferred).toBeTruthy();
    lastDeferred!._resolveDone();
    expect(runtime.notify).toHaveBeenCalledWith('save', { state: 'end' });
    expect(runtime.notify).toHaveBeenCalledTimes(2);
  });
  it('calls runtime.notify with error on failure', async () => {
    const user = userEvent.setup();
    const { screen, runtime } = specRender(<App {...initDataFactory()} />);

    await user.click(screen.getByText('Save'));
    const lastDeferred = getLastDeferred();
    expect(lastDeferred).toBeTruthy();
    lastDeferred!._resolveFail();

    expect(runtime.notify).toHaveBeenCalledWith('error', {
      title: 'Save Error',
      message: 'Failed to save cover block configuration',
    });
  });
  it('calls runtime.notify with cancel on click', async () => {
    const user = userEvent.setup();
    const { screen, runtime } = specRender(<App {...initDataFactory()} />);
    await user.click(screen.getByText('Cancel'));
    expect(runtime.notify).toHaveBeenCalledWith('cancel', {});
    expect(runtime.notify).toHaveBeenCalledOnce();
  });
});
