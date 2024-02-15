import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import CustomersPage from "./pages/Customers";
import Layout from "./components/Layout/Layout";
import CartPage from "./pages/Cart";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ShopPage from "./pages/Shop";
import NotFoundPage from "./pages/NotFound";
import DashboardLayout from "./components/DashboardLayout/Layout";
import UserPage from "./pages/User";
import TransactionsPage from "./pages/Transactions";
import ProductPage from "./pages/Product";
import CheckoutPage from "./pages/Checkout";
import ProtectedRoute from "./components/ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
      <Route
        path="/customers"
        element={
          <Layout>
            <CustomersPage />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <CartPage />
          </Layout>
        }
      />

      <Route
        path="/login"
        element={
          <Layout>
            <LoginPage />
          </Layout>
        }
      />

      <Route
        path="/register"
        element={
          <Layout>
            <RegisterPage />
          </Layout>
        }
      />

      <Route
        path="/shop"
        element={
          <Layout>
            <ShopPage />
          </Layout>
        }
      />

      <Route
        path="/checkout"
        element={
          <Layout>
            <CheckoutPage />
          </Layout>
        }
      />

      <Route
        path="/meals/:id"
        element={
          <Layout>
            <ProductPage />
          </Layout>
        }
      />

      {/* dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<UserPage />} />
        <Route path="transaction" element={<TransactionsPage />}>
          <Route path="settings" element={<UserPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
