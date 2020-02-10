import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

import { StyledTitle, StyledArticleBody } from './style'
import { Base } from '../../components/layouts/Base'

// const StyledFeatureImage = styled(Img)`
//   margin: 0 auto;
//   margin-top: ${props => props.theme.space._24px};
//   max-width: 920px;
//   width: 90%;
//   ${customMedia.lessThan('m')`
//     margin-top: ${props => props.theme.space._12px};
//   `};
// `

const Template = ({ location, data }) => {
  const { markdownRemark: post } = data
  // const featuredImgFluid =
  //   post.frontmatter.featuredImage && post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <>
      <Helmet title={post.frontmatter.title} />
      <Base pathname={location.pathname}>
        <main>
          <article>
            <StyledTitle>{post.frontmatter.title}</StyledTitle>
            {/* {featuredImgFluid && <StyledFeatureImage fluid={featuredImgFluid} />} */}
            <StyledArticleBody
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>
        </main>
      </Base>
    </>
  )
}

export default Template

export const pageQuery = graphql`
  query BlogPostBySlug($path: String!) {
    markdownRemark(fields: { slug: { slugPath: { eq: $path } } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

// アイキャッチの画像もとってくるやつ。今のところなくてもいいのでコメントアウト
// export const pageQuery = graphql`
//   query BlogPostBySlug($path: String!) {
//     markdownRemark(fields: { slug: { slugPath: { eq: $path } } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//         featuredImage {
//           childImageSharp {
//             fluid(maxWidth: 920) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
