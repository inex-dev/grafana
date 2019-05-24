import coreModule from '../../core_module';
import appEvents from 'app/core/app_events';

export class HelpCtrl {
  tabIndex: any;
  shortcuts: any;

  /** @ngInject */
  constructor() {
    this.tabIndex = 0;
    this.shortcuts = {
      Global: [
        { keys: ['g', 'h'], description: 'Перейти на Главную панель инструментов' },
        { keys: ['g', 'p'], description: 'Перейти в профиль' },
        { keys: ['s', 'o'], description: 'Открыть поиск' },
        { keys: ['s', 's'], description: 'Открыть поиск с помеченным фильтром' },
        { keys: ['s', 't'], description: 'Открыть поиск по тегам' },
        { keys: ['esc'], description: 'Выход из режима редактирования/настройки просмотра' },
      ],
      Dashboard: [
        { keys: ['mod+s'], description: 'Сохранить панель' },
        { keys: ['d', 'r'], description: 'Обновить все панели' },
        { keys: ['d', 's'], description: 'Настройки панели' },
        { keys: ['d', 'v'], description: 'Toggle in-active / view mode' },
        { keys: ['d', 'k'], description: 'Переключить режим киоска (скрывает верхнюю навигацию)' },
        { keys: ['d', 'E'], description: 'Развернуть все строки' },
        { keys: ['d', 'C'], description: 'Свернуть все строки' },
        { keys: ['d', 'a'], description: 'Переключить панели автоподбора (экспериментальная функция)' },
        { keys: ['mod+o'], description: 'Toggle shared graph crosshair' },
        { keys: ['d', 'l'], description: 'Переключить все легенды панели' },
      ],
      'Focused Panel': [
        { keys: ['e'], description: 'Переключить вид редактирования панели' },
        { keys: ['v'], description: 'Переключить панель в полноэкранном режиме' },
        { keys: ['p', 's'], description: 'Open Panel Share Modal' },
        { keys: ['p', 'd'], description: 'Дублирувать панель' },
        { keys: ['p', 'r'], description: 'Удалить панель' },
        { keys: ['p', 'l'], description: 'Toggle panel legend' },
      ],
      'Time Range': [
        { keys: ['t', 'z'], description: 'Уменьшить временной диапазон' },
        {
          keys: ['t', '<i class="fa fa-long-arrow-left"></i>'],
          description: 'Переместить диапазон времени назад',
        },
        {
          keys: ['t', '<i class="fa fa-long-arrow-right"></i>'],
          description: 'Переместить диапазон времени вперед',
        },
      ],
    };
  }

  dismiss() {
    appEvents.emit('hide-modal');
  }
}

export function helpModal() {
  return {
    restrict: 'E',
    templateUrl: 'public/app/core/components/help/help.html',
    controller: HelpCtrl,
    bindToController: true,
    transclude: true,
    controllerAs: 'ctrl',
    scope: {},
  };
}

coreModule.directive('helpModal', helpModal);
