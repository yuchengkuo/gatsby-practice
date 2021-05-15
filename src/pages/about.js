// import { Box, Container, Grid } from "@theme-ui/components";
// import { Themed } from "@theme-ui/mdx";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";
// import React from "react";
// import CardEffect from "../components/CardEffect";
// import SEO from "../components/SEO";
// import SharePanel from "../components/SharePanel";

// const data = [
//   {
//     title: `An brief intro.`,
//     content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, laudantium! Debitis, rem, veniam quia voluptates vero eum ab error suscipit quasi totam quod ea excepturi cupiditate consequatur consequuntur? Ratione, sint!`,
//   },
//   {
//     title: `How do I come here?`,
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum perspiciatis unde magnam autem aliquid, nisi tempore at suscipit cumque voluptate illo laudantium impedit modi doloribus voluptatibus mollitia, animi officia.`,
//   },
//   {
//     title: `INFJ, the advocate`,
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque velit iusto asperiores culpa porro alias deleniti tempora assumenda cupiditate maiores, perferendis eveniet quidem officia sequi, architecto tenetur obcaecati accusantium.`,
//   },
// ];

// const aboutPage = () => {
//   return (
//     <>
//       <SEO title={`About`} />

//       <Grid
//         variant="container.wide"
//         sx={{
//           gridTemplateColumns: ["0.36fr 0.28fr 0.36fr"],
//           gap: 20,
//           my: 11,
//         }}
//       >
//         <Box
//           sx={{
//             transition: "all 200ms ease-out",
//             gridColumn: `1 / 3`,
//             gridRow: `1`,
//             zIndex: -1,
//             position: "relative",
//             "::after": {
//               content: '""',
//               position: "absolute",
//               top: "0",
//               left: "0",
//               width: "100%",
//               height: "100%",
//               background: `linear-gradient(90deg, rgba(29, 30, 33, 0.4) 0%, rgba(29, 30, 33, 0.8) 100%)`,
//             },
//           }}
//           onMouseMove={(e) => CardEffect(e, 3)}
//         >
//           <StaticImage
//             src="../images/about.jpg"
//             alt=" "
//             placeholder="none"
//             backgroundColor="#1D1E21"
//             transformOptions="cover"
//           ></StaticImage>
//         </Box>
//         <Box sx={{ gridColumn: `2 / 4`, gridRow: `1`, my: `auto` }}>
//           <Themed.h1>I like cool* things,</Themed.h1>
//           <Themed.h1>What do you think?</Themed.h1>
//         </Box>
//       </Grid>

//       <Container>
//         <Grid
//           sx={{ gridTemplateColumns: [null, "0.36fr 0.64fr"], gap: 10, mb: 11 }}
//         >
//           <Box></Box>
//           <Box>
//             {data.map((item) => (
//               <Box>
//                 <Themed.h3>{item.title}</Themed.h3>
//                 <Themed.p>{item.content}</Themed.p>
//               </Box>
//             ))}
//           </Box>
//         </Grid>
//       </Container>

//       <SharePanel></SharePanel>

//       <Link to="/">Go back.</Link>
//     </>
//   );
// };

// export default aboutPage;
