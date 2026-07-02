import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CategoryHeaderProps {
  category: string;
  description?: string;
}

const CategoryHeader = ({ category, description }: CategoryHeaderProps) => {
  return (
    <section className="w-full px-6 mb-8">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{category}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-light text-foreground">
            {category}
          </h1>
          {description && (
            <p className="text-sm font-light text-muted-foreground max-w-2xl">
              {description}
            </p>
          )}
        </div>
    </section>
  );
};

export default CategoryHeader;