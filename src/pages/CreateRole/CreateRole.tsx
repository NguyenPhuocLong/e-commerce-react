import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import Button from "../../components/ui/button/Button";
import { useNavigate } from "react-router";
import Checkbox from "../../components/form/input/Checkbox";
import { useState } from "react";

export default function CreateRole() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(true);
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Thêm role " />
      <div className="grid grid-cols-1 xl:grid-cols-1">
        <ComponentCard title="Thêm role">
          <div className="space-y-6">
            <div>
              <Label htmlFor="input">Name</Label>
              <Input type="text" id="inputName" placeholder="admin" />
            </div>
            <div>
              <Label htmlFor="inputTwo">Code</Label>
              <Input type="text" id="inputCode" placeholder="abcd" />
            </div>
            <div>
              <Label htmlFor="input">Quyền</Label>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <Checkbox checked={isChecked} onChange={setIsChecked} />
                  <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Default
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox checked={isChecked1} onChange={setIsChecked1} />
                  <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Default
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={isCheckedTwo}
                    onChange={setIsCheckedTwo}
                    label="Checked"
                  />
                </div>
              </div>
            </div>
          </div>
          <Button size="sm" variant="primary" onClick={() => navigate("")}>
            Thêm role
          </Button>
        </ComponentCard>
      </div>
    </div>
  );
}
