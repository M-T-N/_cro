import { qs } from "./qs"

export function cssInject() {
  if (qs('#tin-style') == null) {
    qs('head').insertAdjacentHTML('beforeend', `<style id="tin-style">

    .step--receipt .receipt{grid-template-areas:"header header header header header header header header"
 "upgrade upgrade upgrade upgrade upgrade upgrade upgrade upgrade"
 "summary summary summary summary summary summary summary summary"
 "action action action action action action action action" !important}.step--receipt .receipt__heading{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:8;grid-area:header !important;grid-row:auto !important;grid-column:auto !important}.step--receipt .upgrade__suite{-ms-grid-row:2;-ms-grid-column:1;-ms-grid-column-span:8;grid-area:upgrade !important;grid-row:auto !important;grid-column:auto !important}.step--receipt .receipt__suite{-ms-grid-row:3;-ms-grid-column:1;-ms-grid-column-span:8;grid-area:summary !important;grid-row:auto !important;grid-column:auto !important}.step--receipt .receipt__actions{-ms-grid-row:4;-ms-grid-column:1;-ms-grid-column-span:8;grid-area:action !important;grid-row:auto !important;grid-column:auto !important}@media (min-width: 640px){.upgrade__suite__header{display:flex}.upgrade__suite__header__img{width:50%}.upgrade__suite__header__img img{width:100%}.upgrade__suite__header__copy h3{margin-top:0}.upgrade__suite__body__header{text-align:center}.upgrade__suite__body__header h3{margin:0}.upgrade__suite__body__images{display:flex;flex-wrap:wrap;justify-content:space-between;position:relative;margin-bottom:10px}.upgrade__suite__body__images__img img{width:100%;filter:brightness(0.85)}.upgrade__suite__body__images__img span{position:absolute;line-height:1;bottom:25px;left:10px;color:#fff;text-transform:uppercase;font-weight:600}}@media (min-width: 980px){.step--receipt .receipt{grid-template-areas:". header header header header header header header header header header header header header header ."
 ". upgrade upgrade upgrade upgrade upgrade upgrade upgrade . summary summary summary summary summary summary ."
 ". action action action action action action action action action action action action action action ." !important}.step--receipt .receipt__heading{-ms-grid-row:1;-ms-grid-column:2;-ms-grid-column-span:14}.step--receipt .upgrade__suite{-ms-grid-row:2;-ms-grid-column:2;-ms-grid-column-span:7}.step--receipt .receipt__suite{-ms-grid-row:2;-ms-grid-column:10;-ms-grid-column-span:6}.step--receipt .receipt__actions{-ms-grid-row:3;-ms-grid-column:2;-ms-grid-column-span:14}}
  
    </style>`);
  }
  
}