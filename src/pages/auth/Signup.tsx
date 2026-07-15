import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    dob: ''
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token, data.user);
        toast({ title: 'Success', description: 'Account created successfully!' });
        navigate('/');
      } else {
        toast({ variant: 'destructive', title: 'Error', description: data.message || 'Signup failed' });
      }
    } catch (err) {
      toast({ variant: 'destructive', title: 'Error', description: 'Network error occurred' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] py-12">
      <div className="w-full max-w-md p-8 bg-background border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <Input name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <Input name="lastName" required value={formData.lastName} onChange={handleChange} placeholder="Doe" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <Input type="password" name="password" required value={formData.password} onChange={handleChange} placeholder="••••••••" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number (Optional)</label>
            <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 890" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth (Optional)</label>
            <Input type="date" name="dob" value={formData.dob} onChange={handleChange} />
          </div>
          <Button type="submit" className="w-full mt-4" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account? <Link to="/auth/login" className="text-primary hover:underline">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
