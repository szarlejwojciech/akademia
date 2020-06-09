import React from 'react'
import Downshift from 'downshift'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { navigate } from '@reach/router'
import { toCebabCase } from '../utils/toCebabCase'
import { DropDown, DropDownItem, SearchStyles } from './styled/StyledSearch'
import { isNull } from 'lodash'

const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          type
          categories
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 50, quality: 80) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
const getSlug = (type, categories, title) =>
  `/${type === 'products' ? 'produkty' : 'zabiegi'}/${toCebabCase(
    categories[0]
  )}/${toCebabCase(title)}`

const handleChange = selection => {
  const {
    frontmatter: { type, categories, title },
  } = selection
  navigate(getSlug(type, categories, title))
}

const filterItems = (item, inputValue) => {
  const matchersArray = inputValue
    .match(/([a-z0-9ęóąśłżźćń]{1,})/gi)
    .map(word =>
      item.frontmatter.title.toLowerCase().includes(word.toLowerCase())
    )
  return !inputValue || !matchersArray.includes(false)
}

const Search = () => {
  const {
    allMdx: { nodes: items },
  } = useStaticQuery(query)
  return (
    <SearchStyles>
      <Downshift
        onChange={handleChange}
        itemToString={item => (item ? item.frontmatter.title : '')}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          selectItem,
          isOpen,
          inputValue,
          highlightedIndex,
        }) => (
          <div className="searche-box">
            <input
              {...getInputProps({
                type: 'searche',
                'aria-label': 'Przeszukaj oferte',
                title: 'Przeszukaj oferte',
                id: 'searche',
                name: 'searche',
              })}
            />
            <label
              {...getLabelProps({
                htmlFor: 'searche',
                className: !inputValue ? 'is-empty' : '',
              })}
            >
              Szukaj
            </label>
            <DropDown>
              {isOpen && inputValue
                ? items
                    .filter(item => filterItems(item, inputValue))
                    .map((item, index) => {
                      const {
                        frontmatter: {
                          title,
                          featuredImage: {
                            childImageSharp: { fluid },
                          },
                        },
                      } = item

                      return (
                        <DropDownItem
                          key={title}
                          {...getItemProps({
                            key: title,
                            index,
                            item,
                            highlighted: highlightedIndex === index,
                            onTouchEnd() {
                              selectItem(item)
                            },
                          })}
                        >
                          <Img
                            className="gatsby-image"
                            fluid={fluid}
                            alt={title}
                            title={title}
                          />
                          <span>{title}</span>
                        </DropDownItem>
                      )
                    })
                : null}
              {inputValue &&
                !items.filter(item => filterItems(item, inputValue)).length && (
                  <DropDownItem>
                    Nie znaleziono &quot;{inputValue}&quot;
                  </DropDownItem>
                )}
            </DropDown>
          </div>
        )}
      </Downshift>
    </SearchStyles>
  )
}

export default Search
