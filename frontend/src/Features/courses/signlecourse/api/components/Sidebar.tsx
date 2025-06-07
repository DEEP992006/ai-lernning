// components/Sidebar.jsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../../../components/ui/card";
import { ScrollArea } from "../../../../../components/ui/scroll-area";
import { Badge } from "../../../../../components/ui/badge";
import { BookOpen, ChevronRight } from 'lucide-react';
import { NavLink, useParams } from 'react-router';

export const Sidebar = ({ chapters }) => {
  const { id,chapterid } = useParams();
  
  return (
    <div className="border-r bg-muted/40 h-full pt-18">
      <ScrollArea className="h-full">
        <Card className="border-none shadow-none bg-transparent">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg font-semibold">
                Course Content
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <nav className="space-y-1">
              {chapters.map((chapter, index) => (
                <NavLink
                  key={index}
                  to={`/course/${id}/${index}`}
                  className={({ isActive }) =>
                    `flex items-start p-3 rounded-lg transition-all ${
                      isActive
                        ? 'bg-accent text-accent-foreground shadow-sm'
                        : 'text-muted-foreground hover:bg-accent/50'
                    }`
                  }
                >
                  <Badge 
                    variant={parseInt(chapterid, 10) === index ? "default" : "secondary"} 
                    className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 justify-center p-0"
                  >
                    {index + 1}
                  </Badge>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium leading-none">
                        {chapter.name}
                      </p>
                      <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                    </div>
                    {chapter.desc && (
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {chapter.desc}
                      </p>
                    )}
                  </div>
                </NavLink>
              ))}
            </nav>
          </CardContent>
        </Card>
      </ScrollArea>
    </div>
  );
};