import { CategoryTableOne } from "../../components/category";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";


export default function CategoryTables() {
  return (
    <>
      <PageMeta
        title="Category Tables Dashboard | E-commerce Admin"
        description="Category management tables for E-commerce Admin Dashboard"
      />
      <PageBreadcrumb pageTitle="Category Tables" />
      <div className="space-y-6">
        <ComponentCard title="Categories Management">
          <CategoryTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
