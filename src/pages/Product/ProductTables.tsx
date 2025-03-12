import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { ProductTableOne } from "../../components/product";


export default function ProductTables() {
  return (
    <>
      <PageMeta
        title="Product Tables Dashboard | E-commerce Admin"
        description="Product management tables for E-commerce Admin Dashboard"
      />
      <PageBreadcrumb pageTitle="Product Tables" />
      <div className="space-y-6">
        <ComponentCard title="Products Management">
          <ProductTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
