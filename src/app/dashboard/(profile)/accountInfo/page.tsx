'use client'

import React from 'react'
import {
  Grid,
  Button,
  Typography,
  IconButton,
  Avatar,
  Tooltip,
  Divider,
} from '@mui/material'
import { Navbar, BreadCrumb, CardView } from '@/app/components'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import { accountDetails } from 'public/assets/mockData/data'
import '../../dashboard.scss'
import './page.scss'

interface IHeaderData {
  id: string
  label: string
}

interface IAccountDetails {
  user_id: number
  user_name: string
  email: string
  phone: number
  registered: string
  total_purchase: number
  total_submission: number
  account_type: string
  designation: string
  country_code: string
  country: string
  pages_left: number
  files: number
  billing: string
}

const headerdata = [
  { id: 'id', label: 'User ID' },
  { id: 'user_name', label: 'User Name' },
  { id: 'email', label: 'Email ID' },
  { id: 'phone', label: 'Phone Number' },
  { id: 'registered', label: 'Registered Date' },
  { id: 'total_purchase', label: 'Total Purchase' },
  { id: 'total_submission', label: 'Total Submissions' },
  { id: 'account_type', label: 'Account Type' },
  { id: 'designation', label: 'Designation' },
  { id: 'country', label: 'Country' },
]

const AccountInfoBreadCrumb = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    active: false,
  },
  {
    name: 'Account Info',
    link: '',
    active: true,
  },
]

const Account = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="page-container">
          <div>
            <BreadCrumb item={AccountInfoBreadCrumb} />
          </div>
          <CardView>
            <>
              {accountDetails?.map((row: IAccountDetails) => {
                return (
                  <Grid container spacing={2}>
                    <Grid item md={3.5} sm={6} xs={12}>
                      <CardView cardClassName="account-info-1">
                        <div className="account-info-padding">
                          <div className="flex-center">
                            <IconButton size="large">
                              <Avatar className="account-info-profile-avatar">
                                <PersonOutlinedIcon className="profile-detail-icon" />
                              </Avatar>
                            </IconButton>
                          </div>
                          <div className="flex-center">
                            <Typography variant="h3" component="div">
                              {row.user_name}
                            </Typography>
                          </div>
                          <div className="flex-center">
                            <Typography
                              variant="body2"
                              component="div"
                              className="flex"
                            >
                              {[
                                <MailOutlineOutlinedIcon className="account-detail-icon" />,
                                row.email,
                              ]}
                            </Typography>
                          </div>
                        </div>
                      </CardView>
                      <div className="account-info-margin"></div>
                      <CardView cardClassName="account-info-1">
                        <div className="account-info-padding">
                          <Grid container>
                            <Grid md={6} sm={6} xs={6} width={300}>
                              <div className="flex-center">
                                <Typography variant="h1" fontSize={38}>
                                  {row.pages_left}
                                </Typography>
                              </div>
                              <div className="flex-center">
                                <Typography variant="caption">
                                  Pages left
                                </Typography>
                              </div>
                            </Grid>
                            <Grid md={6} sm={6} xs={6} width={300}>
                              <div className="flex-center">
                                <Typography variant="h1" fontSize={38}>
                                  {row.files}
                                </Typography>
                              </div>
                              <div className="flex-center">
                                <Typography variant="caption">
                                  Files Uploaded
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </CardView>
                      <div className="account-info-margin"></div>
                      <Button
                        variant="contained"
                        className="delele-account"
                        fullWidth
                      >
                        Delete Account
                      </Button>
                    </Grid>
                    <Grid item md={8.5} sm={6} xs={12}>
                      <CardView>
                        <>
                          <Grid container spacing={0.1}>
                            <Grid md={11.5} sm={11.5} xs={11.5}>
                              <Typography
                                gutterBottom
                                variant="h3"
                                component="div"
                              >
                                Account Details
                                <Divider />
                              </Typography>
                            </Grid>
                            <Grid
                              md={0.5}
                              sm={0.5}
                              xs={0.5}
                              className="account-info-edit"
                            >
                              <Tooltip title="Edit" arrow>
                                <IconButton
                                  onClick={() => {
                                    return 0
                                  }}
                                  size="small"
                                >
                                  <EditOutlinedIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Grid>
                          </Grid>
                          <Grid container>
                            {headerdata?.map((column: IHeaderData) => {
                              return (
                                <>
                                  <Grid md={4} sm={12} xs={12}>
                                    <Typography
                                      variant="body2"
                                      className="typo-id"
                                    >
                                      {column.label}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      className="typo-title"
                                    >
                                      {column.id === 'id' && [
                                        <BadgeOutlinedIcon className="account-detail-icon" />,
                                        row?.user_id,
                                      ]}
                                      {column.id === 'user_name' && [
                                        <PermIdentityOutlinedIcon className="account-detail-icon" />,
                                        row?.user_name,
                                      ]}
                                      {column.id === 'email' && [
                                        <MailOutlineOutlinedIcon className="account-detail-icon" />,
                                        row?.email,
                                      ]}
                                      {column.id === 'phone' && [
                                        <LocalPhoneOutlinedIcon className="account-detail-icon" />,
                                        `${row?.country_code} ${row?.phone}`,
                                      ]}
                                      {column.id === 'registered' && [
                                        <CalendarMonthIcon className="account-detail-icon" />,
                                        row?.registered,
                                      ]}
                                      {column.id === 'total_purchase' && [
                                        <ContentCopyOutlinedIcon className="account-detail-icon" />,
                                        `${row?.total_purchase} Pages`,
                                      ]}
                                      {column.id === 'total_submission' && [
                                        <UploadFileOutlinedIcon className="account-detail-icon" />,
                                        `${row?.total_submission} Pages`,
                                      ]}
                                      {column.id === 'account_type' && [
                                        <AccountCircleOutlinedIcon className="account-detail-icon" />,
                                        row?.account_type,
                                      ]}
                                      {column.id === 'designation' && [
                                        <WorkspacePremiumOutlinedIcon className="account-detail-icon" />,
                                        row?.designation,
                                      ]}
                                      {column.id === 'country' && [
                                        <LanguageOutlinedIcon className="account-detail-icon" />,
                                        row?.country,
                                      ]}
                                    </Typography>
                                    <div className="account-info-margin"></div>
                                  </Grid>
                                </>
                              )
                            })}
                          </Grid>
                        </>
                      </CardView>
                      <div className="account-info-margin"></div>
                      <CardView>
                        <>
                          <Grid md={11.5} sm={11.5} xs={11.5}>
                            <Typography
                              gutterBottom
                              variant="h3"
                              component="div"
                            >
                              Billing Address
                              <Divider />
                            </Typography>
                          </Grid>
                          <Typography variant="body2" className="typo-title">
                            {row.billing}
                          </Typography>
                        </>
                      </CardView>
                    </Grid>
                  </Grid>
                )
              })}
            </>
          </CardView>
        </div>
      </div>
    </div>
  )
}

export default Account
