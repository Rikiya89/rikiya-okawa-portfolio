import React from "react";
import { RxLockClosed } from "react-icons/rx";

const ProtectedLabel = () => (
  <span className="type-label inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap fg-2">
    <RxLockClosed aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
    パスワード保護
  </span>
);

export default ProtectedLabel;
