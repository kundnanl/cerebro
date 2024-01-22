"use client"

import { useState } from "react";
import { Dialog, DialogClose, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { DialogContent } from "@radix-ui/react-dialog";

const UploadButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    return ( 
        <Dialog open={isOpen} onOpenChange={(v) => {
            if (!v) {
                setIsOpen(v)
            }
        }}>
            <DialogTrigger asChild>
                <Button>
                    Upload PDF
                </Button>
            </DialogTrigger>

            <DialogContent>
                example content
            </DialogContent>
        </Dialog>
     );
}
 
export default UploadButton;