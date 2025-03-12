import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import ManagementUser1 from "../../components/users/UserTable";

export default function UserPage() {
  return (
    <>
      <PageMeta
        title="User Management | Admin Dashboard"
        description="Manage users in the admin dashboard."
      />
      <PageBreadcrumb pageTitle="User Management" />
      <div className="space-y-6">
        <ComponentCard title="User Table">
          <ManagementUser1 />
        </ComponentCard>
      </div>
    </>
  );
}
