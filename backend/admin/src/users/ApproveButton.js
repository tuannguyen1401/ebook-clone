import * as React from "react";
import { Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useRecordContext, useNotify, useRefresh, useDataProvider } from "react-admin";

const ApproveButton = () => {
  const record = useRecordContext();
  const notify = useNotify();
  const refresh = useRefresh();
  const dataProvider = useDataProvider();

  if (!record) return null;

  const handleClick = async () => {
    const ok = window.confirm(`Duyệt user #${record.id}?`);
    if (!ok) return;
    try {
      await dataProvider.update('users', { id: record.id, data: { role: 'ADMIN' } });
      notify("Đã duyệt user", { type: "info" });
      refresh();
    } catch (e) {
      notify("Lỗi khi duyệt", { type: "warning" });
    }
  };

  return (
    <Button onClick={handleClick} size="small" startIcon={<CheckCircleOutlineIcon />}>
      Duyệt
    </Button>
  );
};

export default ApproveButton;


