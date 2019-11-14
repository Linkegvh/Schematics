define(["require","exports","tslib","external/prop-types","react","modules/clean/react/file_viewer/logging","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/more_dropdown","modules/clean/react/share_download/util","modules/clean/react/title_bar/controls_container","modules/clean/react/user_notifications/dropdown","modules/clean/sharing/api/client","modules/clean/sharing/delete_link_modal","modules/core/browser","modules/clean/react/file_viewer_sidebar/render_utils/call_to_action","modules/clean/react/size_class/utils"],function(e,n,t,r,i,o,l,s,a,u,d,c,p,h,m,f){"use strict";function _(e){return function(){return o.logUserAction(e,l.UserActionContext.TitleBarMain)}}Object.defineProperty(n,"__esModule",{value:!0}),r=t.__importDefault(r),i=t.__importDefault(i),h=t.__importStar(h);var v=(function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.removeShareLink=function(){var e=new c.ShareApiClient({userId:n.props.sharePermission.canRemoveLinkUids[0]});return p.deleteLinkWithConfirmLegacy({client:e,contentName:n.props.file.filename,onCancel:null,onDeleteLink:function(){return h.redirect("/home")},tkey:n.getTkey()})},n}return t.__extends(n,e),n.prototype.getTkey=function(){return this.props.sharePermission&&this.props.sharePermission.canRemoveLinkUids.length>0?this.props.shareToken.linkKey:null},n.prototype.render=function(){var e=this.props,n=e.sizeClass,t=e.file,r=e.shouldDisplayActionButtons,o=e.user,l=e.sharePermission,u=e.sharedLinkInfo,d=e.shareToken,c=e.direction;return f.isSmallerThanLarge(n)?i.default.createElement(s.MoreDropdown,{allowRemoveLink:!!this.getTkey()&&r,file:t,isPrivate:!1,onRemoveShareLink:this.removeShareLink,renderSignIn:!o,sizeClass:n,direction:c,shareDownloadOptions:r?a.getDownloadOptions(l,u,d,t,this.context.authModalKind||null):[]}):i.default.createElement(s.MoreDropdown,{allowRemoveLink:!!this.getTkey(),file:t,isPrivate:!1,onRemoveShareLink:this.removeShareLink,sizeClass:n,direction:c,user:o||void 0,sharedLink:u.url})},n})(i.default.PureComponent);n.SharedFileMoreDropdown=v;var k=(function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(n,e),n.prototype.render=function(){var e=this.props,n=e.file,r=e.sharedLinkInfo,o=e.sharePermission,s=e.shareToken,a=e.shouldDisplayActionButtons,c=e.sizeClass,p=e.user;if(f.isSmallerThanLarge(c))return i.default.createElement(v,t.__assign({},this.props));var h=m.renderSharedFileActions(n,p||void 0,c,r,s,o,a,!1,!1);return i.default.createElement(u.TitleBarControlsContainer,null,h,i.default.createElement(v,t.__assign({},this.props)),p?i.default.createElement("div",{className:"react-title-bar__divider"}):null,p&&!p.is_guest_admin?i.default.createElement(d.UserNotificationsDropdown,{isPagelet:!1,onClick:_(l.UserAction.ClickNotifications)}):null)},n.defaultProps={user:null},n.contextTypes={authModalKind:r.default.oneOf(["download","immediate",null])},n})(i.default.Component);n.SharedFileActions=k});
//# sourceMappingURL=shared_file_actions.min.js-vfldrMJe1.map