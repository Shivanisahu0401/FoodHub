import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface OrderStatusProps {
  status: 'placed' | 'confirmed' | 'preparing' | 'delivering' | 'delivered';
}

const steps = [
  { key: 'placed', label: 'Order Placed' },
  { key: 'confirmed', label: 'Order Confirmed' },
  { key: 'preparing', label: 'Preparing' },
  { key: 'delivering', label: 'Out for Delivery' },
  { key: 'delivered', label: 'Delivered' },
] as const;

export default function OrderStatus({ status }: OrderStatusProps) {
  const currentStep = steps.findIndex((step) => step.key === status);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Order Status</h2>
      
      <div className="relative">
        <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200" />
        
        <div className="space-y-8">
          {steps.map((step, index) => {
            const isCompleted = index <= currentStep;
            const isCurrent = index === currentStep;
            
            return (
              <div key={step.key} className="relative flex items-center">
                <div className={`
                  w-4 h-4 rounded-full z-10
                  ${isCompleted ? 'text-green-500' : 'text-gray-300'}
                  ${isCurrent ? 'animate-pulse' : ''}
                `}>
                  {isCompleted ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                </div>
                <div className="ml-6">
                  <p className={`font-semibold ${isCompleted ? 'text-green-500' : 'text-gray-500'}`}>
                    {step.label}
                  </p>
                  {isCurrent && (
                    <p className="text-sm text-gray-500 mt-1">
                      {getStatusMessage(status)}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function getStatusMessage(status: OrderStatusProps['status']) {
  switch (status) {
    case 'placed':
      return 'We have received your order';
    case 'confirmed':
      return 'Restaurant has confirmed your order';
    case 'preparing':
      return 'Your food is being prepared';
    case 'delivering':
      return 'Delivery partner is on the way';
    case 'delivered':
      return 'Enjoy your meal!';
  }
}