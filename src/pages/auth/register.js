import styled from '@emotion/styled';
import { Alert, Button, FormHelperText, Link, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import AuthLayout from "../../layouts/AuthLayout"


function Page() {

 
  return (
    <>
     <Head>
     <meta property="og:title" content="European Travel Destinations"/>
<meta property="og:type" content="article" />
<meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg"/>
<meta property="og:url" content="http://euro-travel-example.com/index.htm"/>
<meta name="twitter:card" content="summary_large_image"/>

{/* <!--  Non-Essential, But Recommended --> */}
<meta property="og:description" content="Offering tour packages for individuals or groups."/>
<meta property="og:site_name" content="European Travel, Inc."/>
<meta name="twitter:image:alt" content="Alt text for image"/>
        <title>
          Register | Frames
        </title>
      </Head>
    <Box
    sx={{
      background: {xs:"white",lg:"white"},
      flex: '1 1 auto',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    }}
    >
   <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%',
            borderRadius:{xs:"10px"}
          
          }}
        >
          <div>
          <Stack
              spacing={2}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Join this amazing community
              </Typography>
              <Typography
                color="text.primary"
                variant="body2"
              >
                Already have an account?
                &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/login"
                  underline="hover"
                  variant="subtitle2"
                >
                  Log in
                </Link>
              </Typography>
            </Stack>
            
              <form
                noValidate
                onSubmit={()=>{}}
                method="post"
              >
                <Stack spacing={2} >
                <TextField
                    // error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    // helperText={formik.touched.email && formik.errors.email}
                    label="Name"
                    name="name"
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    type="text"
                    // value={formik.values.email}
                  />
                  <TextField
                    // error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    // helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    type="email"
                    // value={formik.values.email}
                  />
                   <TextField
                    // error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    // helperText={formik.touched.password && formik.errors.password}
                    label="Password"
                    name="password"
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    type="password"
                    // value={formik.values.password}
                  />
                  <TextField
                    // error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    // helperText={formik.touched.password && formik.errors.password}
                    label="Confirm Password"
                    name="confirmPassword"
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    type="password"
                    // value={formik.values.password}
                  />
                </Stack>
                
                {/* {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit}
                  </Typography>
                )} */}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
                
              </form>
            
          </div>
        </Box>
  </Box>
    </>
  )
}
Page.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

export default Page