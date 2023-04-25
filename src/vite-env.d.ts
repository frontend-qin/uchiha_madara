/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

import type {
  DialogApi,
  LoadingBarApi,
  MessageApi,
  NotificationApi,
} from "naive-ui";

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare global {
  interface Window {
    $message: MessageApi;
    $dialog: DialogApi;
    $loadingBar: LoadingBarApi;
    $notification: NotificationApi;
  }
}
