import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import Button from "../../components/ui/button/Button";
import { useNavigate } from "react-router";

export default function UpdatePermission() {
  const navigate = useNavigate();
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Sửa permission" />
      <div className="grid grid-cols-1 xl:grid-cols-1">
        <ComponentCard title="Sửa permission">
          <div className="space-y-6">
            <div>
              <Label htmlFor="input">Name</Label>
              <Input type="text" id="inputName" placeholder="admin" />
            </div>
            <div>
              <Label htmlFor="inputTwo">Code</Label>
              <Input type="text" id="inputCode" placeholder="abcd" />
            </div>
          </div>
          <Button size="sm" variant="primary" onClick={() => navigate("")}>
            Sửa permission
          </Button>
        </ComponentCard>
      </div>
    </div>
  );
}
