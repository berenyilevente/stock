import { FC, ReactNode } from "react";

interface Props {
  navigation?: ReactNode;
  mainContent?: ReactNode;
  footer?: ReactNode;
}

const SiteLayout: FC<Props> = ({ navigation, mainContent, footer }) => (
  <div>
    <div>{navigation}</div>
    <div className="h-screen">{mainContent}</div>
    <div className="mt-auto">{footer}</div>
  </div>
);

export default SiteLayout;
