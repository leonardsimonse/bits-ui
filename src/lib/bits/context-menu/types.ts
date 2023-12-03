import type {
	ArrowProps,
	CheckboxItemProps,
	RadioGroupProps,
	RadioItemProps,
	GroupProps,
	SubContentProps,
	SubTriggerProps,
	ContextTriggerProps as TriggerProps,
	ItemProps,
	CheckboxIndicatorProps,
	SeparatorProps,
	SubProps,
	LabelProps,
	Props,
	RadioIndicatorProps,
	//
	ContentEvents,
	CheckboxItemEvents,
	ItemEvents,
	RadioItemEvents,
	SubTriggerEvents,
	ContextTriggerEvents as TriggerEvents,
	SubContentEvents
} from "$lib/bits/menu/index.js";
import type { HTMLDivAttributes, Transition } from "$lib/internal";
import type * as I from "./_types.js";

type ContentProps<
	T extends Transition = Transition,
	In extends Transition = Transition,
	Out extends Transition = Transition
> = I.ContentProps<T, In, Out> & HTMLDivAttributes;

export type {
	Props,
	SubProps,
	ItemProps,
	ArrowProps,
	GroupProps,
	LabelProps,
	ContentProps,
	TriggerProps,
	RadioItemProps,
	SeparatorProps,
	RadioGroupProps,
	SubContentProps,
	SubTriggerProps,
	CheckboxItemProps,
	CheckboxIndicatorProps,
	RadioIndicatorProps,
	//
	Props as ContextMenuProps,
	SubProps as ContextMenuSubProps,
	ItemProps as ContextMenuItemProps,
	LabelProps as ContextMenuLabelProps,
	ArrowProps as ContextMenuArrowProps,
	GroupProps as ContextMenuGroupProps,
	ContentProps as ContextMenuContentProps,
	TriggerProps as ContextMenuTriggerProps,
	RadioItemProps as ContextMenuRadioItemProps,
	SeparatorProps as ContextMenuSeparatorProps,
	RadioGroupProps as ContextMenuRadioGroupProps,
	SubContentProps as ContextMenuSubContentProps,
	SubTriggerProps as ContextMenuSubTriggerProps,
	CheckboxItemProps as ContextMenuCheckboxItemProps,
	CheckboxIndicatorProps as ContextMenuCheckboxIndicatorProps,
	//,
	ItemEvents,
	TriggerEvents,
	ContentEvents,
	RadioItemEvents,
	SubContentEvents,
	SubTriggerEvents,
	CheckboxItemEvents,
	//
	ItemEvents as ContextMenuItemEvents,
	TriggerEvents as ContextMenuTriggerEvents,
	ContentEvents as ContextMenuContentEvents,
	RadioItemEvents as ContextMenuRadioItemEvents,
	SubContentEvents as ContextMenuSubContentEvents,
	SubTriggerEvents as ContextMenuSubTriggerEvents,
	CheckboxItemEvents as ContextMenuCheckboxItemEvents
};
