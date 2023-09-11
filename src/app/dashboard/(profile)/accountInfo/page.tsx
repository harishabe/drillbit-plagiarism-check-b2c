'use client'

import React, { useState } from 'react'
import {
  Grid,
  Button,
  Typography,
  IconButton,
  Avatar,
  Tooltip,
  Divider,
} from '@mui/material'
import {
  PersonOutlined as PersonOutlinedIcon,
  EditOutlined as EditOutlinedIcon,
  BadgeOutlined as BadgeOutlinedIcon,
  PermIdentityOutlined as PermIdentityOutlinedIcon,
  MailOutlineOutlined as MailOutlineOutlinedIcon,
  LocalPhoneOutlined as LocalPhoneOutlinedIcon,
  CalendarMonth as CalendarMonthIcon,
  ContentCopyOutlined as ContentCopyOutlinedIcon,
  UploadFileOutlined as UploadFileOutlinedIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  WorkspacePremiumOutlined as WorkspacePremiumOutlinedIcon,
  LanguageOutlined as LanguageOutlinedIcon,
  SignpostOutlined as SignpostOutlinedIcon,
  LocationCityOutlined as LocationCityOutlinedIcon,
  FestivalOutlined as FestivalOutlinedIcon,
  RoomOutlined as RoomOutlinedIcon,
} from '@mui/icons-material'
import {
  Navbar,
  BreadCrumb,
  CardView,
  DialogModal,
  FormComponent,
} from '@/app/components'
import { accountDetails } from 'public/assets/mockData/data'
import BillingFormJson from '@/app/constant/form/billingDetails.json'
import AccountFormJson from '@/app/constant/form/accountDetails.json'
import '../../dashboard.scss'
import './page.scss'

interface IHeaderData {
  id: string
  label: string
}

interface IBillingData {
  street: string
  city: string
  state: string
  country: string
  zip_code: string
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
  billing: IBillingData[]
}

const accountHeaderdata = [
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

const billingHeaderdata = [
  { id: 'street', label: 'Street / Area' },
  { id: 'city', label: 'City' },
  { id: 'state', label: 'State' },
  { id: 'country', label: 'Country' },
  { id: 'zip_code', label: 'Pin Code' },
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
  const [isEditAccount, setIsEditAccount] = useState(false)
  const [isEditBilling, setIsEditBilling] = useState(false)

  const handleEditBilling = () => {
    setIsEditBilling(true)
  }

  const handleEditAccount = () => {
    setIsEditAccount(true)
  }

  const handleClose = () => {
    setIsEditAccount(false)
    setIsEditBilling(false)
  }
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="page-container">
          <BreadCrumb item={AccountInfoBreadCrumb} />
          <div className="account-info">
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
                        <Typography gutterBottom variant="h3" component="div">
                          Account Details
                          <Tooltip title="Edit" arrow>
                            <IconButton
                              onClick={handleEditAccount}
                              size="small"
                              className="account-edit-icon"
                            >
                              <EditOutlinedIcon className="account-edit" />
                            </IconButton>
                          </Tooltip>
                          <Divider />
                        </Typography>
                        <Grid container>
                          {accountHeaderdata?.map((column: IHeaderData) => {
                            return (
                              <>
                                <Grid md={4} sm={12} xs={6}>
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
                        <Typography gutterBottom variant="h3" component="div">
                          Billing Address
                          <Tooltip title="Edit" arrow>
                            <IconButton
                              onClick={handleEditBilling}
                              size="small"
                              className="account-edit-icon"
                            >
                              <EditOutlinedIcon className="account-edit" />
                            </IconButton>
                          </Tooltip>
                          <Divider />
                        </Typography>
                        <Grid container>
                          {billingHeaderdata?.map((column: IHeaderData) => {
                            return (
                              <>
                                {row?.billing?.map((data) => {
                                  return (
                                    <>
                                      <Grid md={4} sm={12} xs={6}>
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
                                          {column.id === 'street' && [
                                            <SignpostOutlinedIcon className="account-detail-icon" />,
                                            data?.street,
                                          ]}
                                          {column.id === 'city' && [
                                            <LocationCityOutlinedIcon className="account-detail-icon" />,
                                            data?.city,
                                          ]}
                                          {column.id === 'state' && [
                                            <FestivalOutlinedIcon className="account-detail-icon" />,
                                            data?.state,
                                          ]}
                                          {column.id === 'country' && [
                                            <LanguageOutlinedIcon className="account-detail-icon" />,
                                            data?.country,
                                          ]}
                                          {column.id === 'zip_code' && [
                                            <RoomOutlinedIcon className="account-detail-icon" />,
                                            data?.zip_code,
                                          ]}
                                        </Typography>
                                        <div className="account-info-margin"></div>
                                      </Grid>
                                    </>
                                  )
                                })}
                              </>
                            )
                          })}
                        </Grid>
                      </>
                    </CardView>
                  </Grid>
                </Grid>
              )
            })}
          </div>
        </div>
      </div>

      {isEditAccount && (
        <DialogModal
          isOpen={isEditAccount}
          headingTitle="Account Details"
          maxWidth={'xs'}
          children={
            AccountFormJson
              ? AccountFormJson.map((field) => (
                  <FormComponent key={field.id} field={field} />
                ))
              : null
          }
          handleClose={handleClose}
        />
      )}
      {isEditBilling && (
        <DialogModal
          isOpen={isEditBilling}
          headingTitle="Billing Address"
          maxWidth={'xs'}
          children={
            BillingFormJson
              ? BillingFormJson.map((field) => (
                  <FormComponent key={field.id} field={field} />
                ))
              : null
          }
          handleClose={handleClose}
        />
      )}
    </div>
  )
}

export default Account
