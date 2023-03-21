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
        <title>
          Login | Frames
        </title>
      </Head>
    <Box
    sx={{
      backgroundColor: 'primary',
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
            backgroundColor: {xs:"white"},
            borderRadius:{xs:"10px"}
          
          }}
        >
          <div>
          <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h3">
                Login
              </Typography>
              <Typography
                color="text.primary"
                variant="body2"
              >
                Don&apos;t have an account?
                &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>
            
              <form
                noValidate
                onSubmit={()=>{}}
                method="post"
              >
                <Stack spacing={2}>
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