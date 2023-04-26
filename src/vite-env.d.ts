/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// import type {
//   DialogApi,
//   LoadingBarApi,
//   MessageApi,
//   NotificationApi,
// } from "naive-ui";

declare global {
  interface Window {
    $message: MessageApi;
    $dialog: DialogApi;
    $loadingBar: LoadingBarApi;
    $notification: NotificationApi;
  }
}
