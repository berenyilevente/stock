import { FC, ReactNode } from "react";

interface Props {
  content?: ReactNode;
}

const HomeLayout: FC<Props> = ({ content }) => (
  <div className="container mx-auto">
    <div>{content}</div>
  </div>
);
export default HomeLayout;
