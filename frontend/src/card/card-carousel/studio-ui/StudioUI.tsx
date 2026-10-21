import { useMemo, useState } from "react";
import { Form, Formik } from "formik";
import { TabContainer, TabContent, TabPane } from "@openedx/paragon";
import { type InitData } from "@/card/card-carousel/types";
import { newCard } from "@/card/common/utils";
import {
  saveStudioBlock,
  type XBlockRuntime,
} from "@opencraft/xblock-react-utils";
import SettingsForm from "@/card/card-carousel/studio-ui/SettingsForm";
import StudioHeader, { type StudioTab } from "@/shared/components/StudioHeader";
import CarouselEditor from "@/card/common/studio-ui/CardListEditor";
import ModalFooter from "@/card/common/studio-ui/ModalFooter";
import JsonImporter from "@/shared/components/JsonImporter";

const TABS: StudioTab[] = [
  { key: "content", label: "Content" },
  { key: "settings", label: "Settings" },
  { key: "json", label: "JSON" },
];

type StudioTabKey = (typeof TABS)[number]["key"];

interface StudioUIProps {
  saveUrl: string;
  runtime: XBlockRuntime;
  initData: InitData;
}

function StudioUI({ runtime, saveUrl, initData }: StudioUIProps) {
  const defaultTab = TABS[0].key;
  const [activeTab, setActiveTab] = useState<StudioTabKey>(defaultTab);
  const initialData = useMemo(
    () =>
      initData.cards.length
        ? initData
        : {
            ...initData,
            cards: [newCard([], { orientation: "HORIZONTAL" as const })],
          },
    [initData],
  );

  return (
    <Formik
      initialValues={initialData}
      onSubmit={(values) => {
        saveStudioBlock<InitData>({
          saveUrl,
          data: values,
          runtime,
          errorMessage: "Failed to save the card carousel.",
        });
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <TabContainer
            id="card-carousel-studio-tabs"
            activeKey={activeTab}
            onSelect={(eventKey: string | null) =>
              setActiveTab(eventKey ? eventKey : defaultTab)
            }
            transition={false}
          >
            <div className="studio-ui card-carousel-studio">
              <StudioHeader
                activeTab={activeTab}
                tabs={TABS}
                title={values.displayName}
                onTitleChange={(displayName) =>
                  setFieldValue("displayName", displayName)
                }
              />
              <TabContent className="card-carousel-studio-tab-content">
                <TabPane eventKey="content">
                  <CarouselEditor enableCardOrientation />
                </TabPane>
                <TabPane eventKey="settings">
                  <SettingsForm />
                </TabPane>
                <TabPane eventKey="json">
                  <JsonImporter saveUrl={saveUrl} runtime={runtime} />
                </TabPane>
              </TabContent>
              <ModalFooter
                runtime={runtime}
                showingEditor
                onContinue={() => {}}
              />
            </div>
          </TabContainer>
        </Form>
      )}
    </Formik>
  );
}

export default StudioUI;
