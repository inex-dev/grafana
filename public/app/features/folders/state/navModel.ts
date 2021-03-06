import { FolderDTO } from 'app/types';
import { NavModelItem, NavModel } from '@grafana/ui';

export function buildNavModel(folder: FolderDTO): NavModelItem {
  return {
    icon: 'fa fa-folder-open',
    id: 'manage-folder',
    subTitle: 'Управление папками панелей и разрешений',
    url: '',
    text: folder.title,
    breadcrumbs: [{ title: 'Панели', url: 'dashboards' }],
    children: [
      {
        active: false,
        icon: 'fa fa-fw fa-th-large',
        id: `folder-dashboards-${folder.uid}`,
        text: 'Панели',
        url: folder.url,
      },
      {
        active: false,
        icon: 'fa fa-fw fa-lock',
        id: `folder-permissions-${folder.uid}`,
        text: 'Разрешения',
        url: `${folder.url}/permissions`,
      },
      {
        active: false,
        icon: 'gicon gicon-cog',
        id: `folder-settings-${folder.uid}`,
        text: 'Настройки',
        url: `${folder.url}/settings`,
      },
    ],
  };
}

export function getLoadingNav(tabIndex: number): NavModel {
  const main = buildNavModel({
    id: 1,
    uid: 'loading',
    title: 'Loading',
    url: 'url',
    canSave: false,
    version: 0,
  });

  main.children[tabIndex].active = true;

  return {
    main: main,
    node: main.children[tabIndex],
  };
}
