import { z } from 'zod'
import { Map, MapInput, PoI, PoIInput, Scenario, ScenarioInput } from './types'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function MapSchema(): z.ZodObject<Properties<Map>> {
  return z.object({
    __typename: z.literal('Map').optional(),
    description: z.string().nullish(),
    id: z.number(),
    pictureUrl: z.string().max(512),
    pointsOfInterest: z.array(PoISchema().nullable()).nullish(),
    title: z.string().min(4).max(128).nullish()
  })
}

export function MapInputSchema(): z.ZodObject<Properties<MapInput>> {
  return z.object({
    description: z.string().nullish(),
    pictureUrl: z.string().max(512),
    pointsOfInterest: z.array(z.lazy(() => PoIInputSchema().nullable())).nullish(),
    title: z.string().min(4).max(128).nullish()
  })
}

export function PoISchema(): z.ZodObject<Properties<PoI>> {
  return z.object({
    __typename: z.literal('PoI').optional(),
    code: z.string().min(1).max(4).nullish(),
    description: z.string(),
    id: z.number(),
    title: z.string().min(4).max(128)
  })
}

export function PoIInputSchema(): z.ZodObject<Properties<PoIInput>> {
  return z.object({
    code: z.string().min(1).max(4).nullish(),
    description: z.string(),
    title: z.string().min(4).max(128)
  })
}

export function ScenarioSchema(): z.ZodObject<Properties<Scenario>> {
  return z.object({
    __typename: z.literal('Scenario').optional(),
    bannerUrl: z.string().max(512),
    credits: z.string().max(1024),
    fullStory: z.string().min(1024),
    id: z.number(),
    maps: z.array(MapSchema().nullable()).nullish(),
    teaser: z.string().min(16).max(1024),
    title: z.string().min(8).max(256)
  })
}

export function ScenarioInputSchema(): z.ZodObject<Properties<ScenarioInput>> {
  return z.object({
    bannerUrl: z.string().max(512),
    credits: z.string().max(1024),
    fullStory: z.string().min(1024),
    maps: z.array(z.lazy(() => MapInputSchema().nullable())).nullish(),
    teaser: z.string().min(16).max(1024),
    title: z.string().min(8).max(256)
  })
}
