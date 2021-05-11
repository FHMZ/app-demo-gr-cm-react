import { grey } from '@material-ui/core/colors'
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined'
import React from 'react'

export const appRoute = {
  appLogin: '/app/auth/login',
  appHome: '/app/home',
  appMainDashboard: '/app/dashboard',
}

export const menuList = [
  {
    id: 1,
    label: 'Dasboard',
    path: appRoute.appMainDashboard,
    icon: <DashboardOutlinedIcon style={{ color: grey[200] }} />,
  },
  {
    id: 2,
    label: 'Solicitações',
    path: '',
    icon: <CreateOutlinedIcon style={{ color: grey[200] }} />,
    subMenuList: [
      {
        id: 1,
        label: 'Aportes',
        path: appRoute.appMainDashboard,
        icon: <CreateOutlinedIcon style={{ color: grey[200] }} />,
      },
      {
        id: 2,
        label: 'Resgates',
        path: appRoute.appMainDashboard,
        icon: <CreateOutlinedIcon style={{ color: grey[200] }} />,
      },
    ],
  },
  {
    id: 3,
    label: 'Consultas',
    path: '',
    icon: <FindInPageOutlinedIcon style={{ color: grey[200] }} />,
    subMenuList: [
      {
        id: 1,
        label: 'Todas as Vendas',
        path: appRoute.appMainDashboard,
        icon: <FindInPageOutlinedIcon style={{ color: grey[200] }} />,
      },
      {
        id: 1,
        label: 'Nova Venda',
        path: appRoute.appMainDashboard,
        icon: <FindInPageOutlinedIcon style={{ color: grey[200] }} />,
      },
    ],
  },
  {
    id: 4,
    label: 'Minhas Decisões',
    path: appRoute.appMainDashboard,
    icon: <EmojiObjectsOutlinedIcon style={{ color: grey[200] }} />,
  },
  {
    id: 5,
    label: 'Gestão de Controles',
    path: appRoute.appMainDashboard,
    icon: <AccountBalanceOutlinedIcon style={{ color: grey[200] }} />,
  },
  {
    id: 6,
    label: 'Simulador',
    path: appRoute.appMainDashboard,
    icon: <TrendingUpOutlinedIcon style={{ color: grey[200] }} />,
  },
  {
    id: 7,
    label: 'Imposto de Renda',
    path: appRoute.appMainDashboard,
    icon: <MonetizationOnOutlinedIcon style={{ color: grey[200] }} />,
  },
  {
    id: 8,
    label: 'Logout',
    path: appRoute.appLogin,
    icon: <ExitToAppOutlinedIcon style={{ color: grey[200] }} />,
  },
]
