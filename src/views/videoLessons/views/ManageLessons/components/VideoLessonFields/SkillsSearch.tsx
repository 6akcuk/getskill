import { debounce } from 'lodash'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSkills } from '../../../../../../api'
import { AsyncSelectProps, AsyncMultiSelectProps } from '../../../../../../components'
import * as S from './SkillsSearch.styles'

type SkillsSearchProps = Pick<AsyncMultiSelectProps, 'onChange' | 'value'>

function SkillsSearch(props: SkillsSearchProps) {
  const { t } = useTranslation('app')
  const [, getSkills] = useSkills()

  const searchSkills = useCallback<AsyncSelectProps['loadOptions']>(
    debounce((search, callback) => {
      getSkills(
        {
          query: search,
        },
        {},
      ).then(skills =>
        callback(
          skills.map(skill => ({
            label: skill.name,
            value: `${skill.id}`,
          })),
        ),
      )
    }, 250),
    [getSkills],
  )
  const formatCreateLabel = useCallback<Required<AsyncMultiSelectProps>['formatCreateLabel']>(
    skill => `${t('common.skill_search.create_label')} "${skill}"`,
    [t],
  )
  const loadingMessage = useCallback<Required<AsyncMultiSelectProps>['loadingMessage']>(
    _ => t('common.skill_search.loading'),
    [t],
  )
  const noOptionsMessage = useCallback<Required<AsyncMultiSelectProps>['noOptionsMessage']>(
    _ => t('common.skill_search.no_options'),
    [t],
  )

  return (
    <S.SearchInput
      isSearchable={true}
      isClearable={false}
      loadOptions={searchSkills}
      value={props.value}
      onChange={props.onChange}
      formatCreateLabel={formatCreateLabel}
      loadingMessage={loadingMessage}
      placeholder={t('common.skill_search.placeholder')}
      noOptionsMessage={noOptionsMessage}
    />
  )
}

export default SkillsSearch
export { SkillsSearch }
