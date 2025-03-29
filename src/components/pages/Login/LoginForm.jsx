import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/components/Redux/AuthSlice/authSlice";

const Email = "vel@test.com";
const Password = "123";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min({ message: "Enter Email and Password" }),
});

function LoginForm({ }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const onSubmit = async (data) => {
    if (data.email !== Email || data.password !== Password) {
      form.setError("email", { type: "manual", message: "Invalid email or password" });
      form.setError("password", { type: "manual", message: "Invalid email or password" });
      return;
    }
    dispatch(login()); // stored in localStorage
    navigate("/home");
  };

  return (
    <div className="flex min-h-screen items-center justify-center login-bg">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">
            <h4>Login</h4>
            <div className="items-center space-x-4 mt-2">
              <img src="../logo.jpg" alt="Profile" className="mx-auto" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded text-white transition">
                Login
              </Button>
            </form>
          </Form>
          <div className="bg-gray-100 p-2 mt-2">
            <p className="text-gray-500 text-xs flex gap-4">Login Details <ArrowRight size={18} /> Email : vel@test.com , Password: 123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm;
