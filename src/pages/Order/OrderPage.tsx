import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import OrderManagementTable from "../../components/Order/OrderManagementTable";

export default function OrderPage() {
  return (
    <>
      <PageMeta
        title="Order Management | Admin Dashboard"
        description="Manage users in the admin dashboard."
      />
      <PageBreadcrumb pageTitle="User Management" />
      <div className="space-y-6">
        <ComponentCard title="User Table">
          <OrderManagementTable/>
        </ComponentCard>
      </div>
    </>
  );
}
