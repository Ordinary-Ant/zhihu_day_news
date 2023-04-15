import { Toast } from "antd-mobile";

function toast(type = "success", e) {
  const msg = e.msg || e.error_msg || e.message || JSON.stringify(e);
  Toast.show({
    icon: type,
    content: msg,
  });
}

export { toast };
