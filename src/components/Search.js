import React, { useRef } from 'react'
import Downshift from 'downshift'
import Img from 'gatsby-image'
import slugify from 'slugify'
import { graphql, useStaticQuery } from 'gatsby'
import { navigate } from '@reach/router'
import { DropDown, DropDownItem, SearchStyles } from './styled/StyledSearch'

const query = graphql`
  {
    allMdx {
      nodes {
        fields {
          slug
        }
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

const Search = () => {
  const {
    allMdx: { nodes: items },
  } = useStaticQuery(query)
  const isMoving = useRef()

  const getSlug = (type, categories, slug) =>
    `/${type}/${slugify(categories[0], { lower: true, strict: true })}/${slug}`

  const handleChange = selection => {
    const {
      fields: { slug },
      frontmatter: { type, categories },
    } = selection
    navigate(getSlug(type, categories, slug))
  }

  const handleTouchMove = () => {
    isMoving.current = true
  }
  const filterItems = (item, inputValue) => {
    const matchersArray = inputValue
      .match(/([^ \n]{1,})/gi)
      ?.map(word =>
        item.frontmatter.title.toLowerCase().includes(word.toLowerCase())
      )
    return !inputValue || !matchersArray?.includes(false)
  }

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
          <div className="searche-box" role="search">
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
                        fields: { slug },
                        frontmatter: {
                          title,
                          featuredImage: {
                            childImageSharp: { fluid },
                          },
                        },
                      } = item

                      return (
                        <DropDownItem
                          key={slug}
                          {...getItemProps({
                            key: slug,
                            index,
                            item,
                            highlighted: highlightedIndex === index,
                            onTouchStart() {
                              window.addEventListener(
                                'touchmove',
                                handleTouchMove
                              )
                            },
                            onTouchEnd() {
                              if (!isMoving.current) selectItem(item)
                              window.removeEventListener(
                                'touchmove',
                                handleTouchMove
                              )
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
