import { Search } from 'lucide-react';
import { Input } from '../ui/input';

export default function SearchBar() {
  return (
    <form className="flex items-center">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for something..."
          className="pl-10 py-5 text-lg rounded-full"
          style={{ 
            backgroundColor: "#F5F7FA",
             width: "100%", // Ensure the input takes full container width
            height: "30px"
          }}
        />
      </div>
      
    </form>
  );
}