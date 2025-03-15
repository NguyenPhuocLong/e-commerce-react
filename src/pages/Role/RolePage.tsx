import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { BoxIcon } from "../../icons";
import { useNavigate } from "react-router";
import { RoleTable } from "../../components/role";

export default function RolePage() {
  const navigate = useNavigate();

  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Role" />
      <div className="space-y-6">
        <ComponentCard title="Role">
          <Button
            size="sm"
            variant="primary"
            endIcon={<BoxIcon className="size-5" />}
            onClick={() => navigate("/create-role")}
          >
            Thêm
          </Button>
          <RoleTable />
        </ComponentCard>
      </div>
    </>
  );
}
