import React from 'react';
import { useApp } from '../context/AppContext';
import { formatCurrency } from '../lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import { MessageSquare, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/order-confirmation');
  }, [navigate]);

  return <div className="p-20 text-center">Redirecting...</div>;
};

export default CheckoutPage;