import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIListGroup } from './integralui.listgroup';
export declare class IntegralUIListBar extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected dataService: IntegralUIDataService;
    protected commonService: IntegralUICommonService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    private numGroups;
    private blockMarginTop;
    scrollPos: any;
    maxScrollPos: any;
    buttonWidth: number;
    buttonUpElem: ElementRef;
    buttonDownElem: ElementRef;
    contentRef: ViewContainerRef;
    contentElem: ElementRef;
    contentList: QueryList<IntegralUIListGroup>;
    private groupList;
    private groupEventList;
    initScrollPos: number;
    private isScrollActive;
    isScrollVisible: boolean;
    private scrollCount;
    private scrollTimer;
    private stopScrolling;
    private currentSelection;
    private currentSelectedIndex;
    private selectedComponent;
    private prevComponent;
    private removeIndex;
    private trialRef;
    groups: Array<any>;
    selectedIndex: number;
    selectedGroup: any;
    afterCollapse: EventEmitter<any>;
    afterExpand: EventEmitter<any>;
    afterSelect: EventEmitter<any>;
    beforeCollapse: EventEmitter<any>;
    beforeExpand: EventEmitter<any>;
    beforeSelect: EventEmitter<any>;
    groupAdding: EventEmitter<any>;
    groupAdded: EventEmitter<any>;
    clear: EventEmitter<any>;
    groupRemoving: EventEmitter<any>;
    groupRemoved: EventEmitter<any>;
    selectionChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, dataService: IntegralUIDataService, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    clearGroups(): void;
    addGroup(group: any): void;
    insertGroupAt(group: any, index: number): void;
    insertGroupBefore(group: any, refGroup: any): void;
    insertGroupAfter(group: any, refGroup: any): void;
    removeGroup(group: any): void;
    removeGroupAt(index: number): void;
    private callEventAdd(type, group, index?, refGroup?, flag?);
    private callEventRemove(group);
    private closeGroups(cmp);
    private toggleGroups();
    private getGroupCurrentIndex(cmp);
    private getGroupDataIndex(cmp);
    private getGroupData(index);
    private getGroupIndex(group);
    private getComponentData(cmp);
    invokeEvent(key: string, cmp: IntegralUIListGroup): boolean;
    invokeMethod(key: string, cmp: IntegralUIListGroup): boolean;
    private isIndexInRange(index);
    private attachGroupEvents();
    updateLayout(): void;
    scrollUpPressed(): void;
    scrollUpReleased(): void;
    scrollDownPressed(): void;
    scrollDownReleased(): void;
    startScroll(flag: boolean): void;
    stopScroll(): void;
    scrollTimerElapsed(flag: boolean): void;
    processScroll(flag: boolean): void;
    listMouseWheel(e: any): void;
    setScrollPos(value: any): void;
    private clearSelection(cmp);
    private selectComponent(cmp);
    private selectComponentByIndex(index);
    selectGroup(group: any): void;
}
