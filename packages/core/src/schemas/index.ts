/**
 * @module @minions-releases/sdk/schemas
 * Custom MinionType schemas for Minions Releases.
 */

import type { MinionType } from 'minions-sdk';

export const releaseplanType: MinionType = {
  id: 'releases-release-plan',
  name: 'Release plan',
  slug: 'release-plan',
  description: 'A planned release with version target and included features.',
  icon: '🚀',
  schema: [
    { name: 'repoDefinitionId', type: 'string', label: 'repoDefinitionId' },
    { name: 'version', type: 'string', label: 'version' },
    { name: 'releaseType', type: 'select', label: 'releaseType' },
    { name: 'featureTaskIds', type: 'string', label: 'featureTaskIds' },
    { name: 'changelog', type: 'string', label: 'changelog' },
    { name: 'scheduledAt', type: 'string', label: 'scheduledAt' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const versionbumpType: MinionType = {
  id: 'releases-version-bump',
  name: 'Version bump',
  slug: 'version-bump',
  description: 'A version bump event with before/after versions.',
  icon: '🔢',
  schema: [
    { name: 'repoDefinitionId', type: 'string', label: 'repoDefinitionId' },
    { name: 'releasePlanId', type: 'string', label: 'releasePlanId' },
    { name: 'fromVersion', type: 'string', label: 'fromVersion' },
    { name: 'toVersion', type: 'string', label: 'toVersion' },
    { name: 'bumpType', type: 'select', label: 'bumpType' },
    { name: 'bumpedAt', type: 'string', label: 'bumpedAt' },
    { name: 'tagName', type: 'string', label: 'tagName' },
    { name: 'tagUrl', type: 'string', label: 'tagUrl' },
  ],
};

export const publishtargetType: MinionType = {
  id: 'releases-publish-target',
  name: 'Publish target',
  slug: 'publish-target',
  description: 'A registry or platform where releases are published.',
  icon: '📤',
  schema: [
    { name: 'repoDefinitionId', type: 'string', label: 'repoDefinitionId' },
    { name: 'registry', type: 'select', label: 'registry' },
    { name: 'packageName', type: 'string', label: 'packageName' },
    { name: 'publishCommand', type: 'string', label: 'publishCommand' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
    { name: 'lastPublishedVersion', type: 'string', label: 'lastPublishedVersion' },
    { name: 'lastPublishedAt', type: 'string', label: 'lastPublishedAt' },
  ],
};

export const releasereceiptType: MinionType = {
  id: 'releases-release-receipt',
  name: 'Release receipt',
  slug: 'release-receipt',
  description: 'Confirmation that a release was published to a target.',
  icon: '✅',
  schema: [
    { name: 'releasePlanId', type: 'string', label: 'releasePlanId' },
    { name: 'publishTargetId', type: 'string', label: 'publishTargetId' },
    { name: 'version', type: 'string', label: 'version' },
    { name: 'publishedAt', type: 'string', label: 'publishedAt' },
    { name: 'publishedUrl', type: 'string', label: 'publishedUrl' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const customTypes: MinionType[] = [
  releaseplanType,
  versionbumpType,
  publishtargetType,
  releasereceiptType,
];

