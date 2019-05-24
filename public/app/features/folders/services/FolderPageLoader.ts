export class FolderPageLoader {
  constructor(private backendSrv) {}

  load(ctrl, uid, activeChildId) {
    ctrl.navModel = {
      main: {
        icon: 'fa fa-folder-open',
        id: 'manage-folder',
        subTitle: 'Управление папками панелей и разрешений',
        url: '',
        text: '',
        breadcrumbs: [{ title: 'Панели', url: 'dashboards' }],
        children: [
          {
            active: activeChildId === 'manage-folder-dashboards',
            icon: 'fa fa-fw fa-th-large',
            id: 'manage-folder-dashboards',
            text: 'Панели',
            url: 'dashboards',
          },
          {
            active: activeChildId === 'manage-folder-permissions',
            icon: 'fa fa-fw fa-lock',
            id: 'manage-folder-permissions',
            text: 'Разрешения',
            url: 'dashboards/permissions',
          },
          {
            active: activeChildId === 'manage-folder-settings',
            icon: 'gicon gicon-cog',
            id: 'manage-folder-settings',
            text: 'Настройки',
            url: 'dashboards/settings',
          },
        ],
      },
    };

    return this.backendSrv.getFolderByUid(uid).then(folder => {
      ctrl.folderId = folder.id;
      const folderTitle = folder.title;
      const folderUrl = folder.url;
      ctrl.navModel.main.text = folderTitle;

      const dashTab = ctrl.navModel.main.children.find(child => child.id === 'manage-folder-dashboards');
      dashTab.url = folderUrl;

      if (folder.canAdmin) {
        const permTab = ctrl.navModel.main.children.find(child => child.id === 'manage-folder-permissions');
        permTab.url = folderUrl + '/permissions';

        const settingsTab = ctrl.navModel.main.children.find(child => child.id === 'manage-folder-settings');
        settingsTab.url = folderUrl + '/settings';
      } else {
        ctrl.navModel.main.children = [dashTab];
      }

      return folder;
    });
  }
}
