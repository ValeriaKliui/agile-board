import { useBreadcrumbs } from "@hooks/useBreadcrumbs";
import { Breadcrumb } from "antd";
import { Link } from "react-router";

export const Breadcrumbs = () => {
  const breadcrumbItems = useBreadcrumbs();

  return (
    <Breadcrumb
      items={[
        { key: "/", title: <Link to="/">Home</Link> },
        ...breadcrumbItems,
      ]}
    />
  );
};
