function UnfoldingScenarioEditor(runtime, element, data) {
  (async () => {
    const { url, ...blockData } = data;
    const { renderEditor } = await import(url);
    renderEditor(runtime, element, blockData);
  })();
}
