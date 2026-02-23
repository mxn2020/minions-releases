"""
Minions Releases SDK — Type Schemas
Custom MinionType schemas for Minions Releases.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

release_plan_type = MinionType(
    id="releases-release-plan",
    name="Release plan",
    slug="release-plan",
    description="A planned release with version target and included features.",
    icon="🚀",
    schema=[
        FieldDefinition(name="repoDefinitionId", type="string", label="repoDefinitionId"),
        FieldDefinition(name="version", type="string", label="version"),
        FieldDefinition(name="releaseType", type="select", label="releaseType"),
        FieldDefinition(name="featureTaskIds", type="string", label="featureTaskIds"),
        FieldDefinition(name="changelog", type="string", label="changelog"),
        FieldDefinition(name="scheduledAt", type="string", label="scheduledAt"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

version_bump_type = MinionType(
    id="releases-version-bump",
    name="Version bump",
    slug="version-bump",
    description="A version bump event with before/after versions.",
    icon="🔢",
    schema=[
        FieldDefinition(name="repoDefinitionId", type="string", label="repoDefinitionId"),
        FieldDefinition(name="releasePlanId", type="string", label="releasePlanId"),
        FieldDefinition(name="fromVersion", type="string", label="fromVersion"),
        FieldDefinition(name="toVersion", type="string", label="toVersion"),
        FieldDefinition(name="bumpType", type="select", label="bumpType"),
        FieldDefinition(name="bumpedAt", type="string", label="bumpedAt"),
        FieldDefinition(name="tagName", type="string", label="tagName"),
        FieldDefinition(name="tagUrl", type="string", label="tagUrl"),
    ],
)

publish_target_type = MinionType(
    id="releases-publish-target",
    name="Publish target",
    slug="publish-target",
    description="A registry or platform where releases are published.",
    icon="📤",
    schema=[
        FieldDefinition(name="repoDefinitionId", type="string", label="repoDefinitionId"),
        FieldDefinition(name="registry", type="select", label="registry"),
        FieldDefinition(name="packageName", type="string", label="packageName"),
        FieldDefinition(name="publishCommand", type="string", label="publishCommand"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
        FieldDefinition(name="lastPublishedVersion", type="string", label="lastPublishedVersion"),
        FieldDefinition(name="lastPublishedAt", type="string", label="lastPublishedAt"),
    ],
)

release_receipt_type = MinionType(
    id="releases-release-receipt",
    name="Release receipt",
    slug="release-receipt",
    description="Confirmation that a release was published to a target.",
    icon="✅",
    schema=[
        FieldDefinition(name="releasePlanId", type="string", label="releasePlanId"),
        FieldDefinition(name="publishTargetId", type="string", label="publishTargetId"),
        FieldDefinition(name="version", type="string", label="version"),
        FieldDefinition(name="publishedAt", type="string", label="publishedAt"),
        FieldDefinition(name="publishedUrl", type="string", label="publishedUrl"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

custom_types: list[MinionType] = [
    release_plan_type,
    version_bump_type,
    publish_target_type,
    release_receipt_type,
]

