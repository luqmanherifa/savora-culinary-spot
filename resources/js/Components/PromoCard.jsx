import { cn } from "@/lib/utils";
import { Card, CardHeader } from "@/components/ui/card";

export function PromoCard({ className, ...props }) {
    return (
        <Card className={cn("w-[250px]", className)} {...props}>
            <CardHeader className="w-[250px] p-0">
                <div>
                    <img
                        className="rounded-lg"
                        src="https://picsum.photos/300/170"
                        alt=""
                    />
                </div>
            </CardHeader>
        </Card>
    );
}
