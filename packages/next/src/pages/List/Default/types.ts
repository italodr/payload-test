import type { ColumnPreferences } from '@payloadcms/ui'
import type { SanitizedCollectionConfig } from 'payload/types'

export type DefaultListViewProps = {
  collectionSlug: SanitizedCollectionConfig['slug']
}

export type ListIndexProps = {
  collection: SanitizedCollectionConfig
}

export type ListPreferences = {
  columns: ColumnPreferences
  limit: number
  sort: number
}