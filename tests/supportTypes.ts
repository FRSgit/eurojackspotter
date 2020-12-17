import type Vue from 'vue';
import type { Wrapper } from '@vue/test-utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentWrapper = Wrapper<Vue & { [key: string]: any }>;
