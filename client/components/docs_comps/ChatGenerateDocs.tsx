"use client";

import { useState } from "react";
import { UploadCloud, Github, FileText, CheckCircle2 } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Spinner from "../shared/Spinner";

const ChatGenerateDocs = () => {
  const [githubUrl, setGithubUrl] = useState("");
  const [zipFile, setZipFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const canGenerate = Boolean(zipFile || githubUrl);

  const handleGenerate = async () => {
    if (!canGenerate) return;

    setIsGenerating(true);

    // simulate API call
    await new Promise((r) => setTimeout(r, 2000));

    setIsGenerating(false);

    console.log("GENERATED DATA IS : ", zipFile);
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* HEADER */}
      <div className="mb-14 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <FileText className="h-7 w-7" />
        </div>

        <h2 className="text-2xl font-semibold tracking-tight">
          Documentation Generator
        </h2>

        <p className="mt-2 mx-auto max-w-2xl text-sm text-muted-foreground">
          Generate clean, structured, production-ready documentation directly
          from your codebase.
        </p>
      </div>

      {/* BODY */}
      <Card className="relative rounded-3xl border-primary/30 bg-muted/60 backdrop-blur shadow-xl">
        <CardContent className="grid grid-cols-1 gap-10 p-8 lg:grid-cols-2">
          {/* ZIP */}
          <Card className="group border bg-background/70 transition hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-2">
                <UploadCloud className="h-4 w-4 text-primary" />
                <CardTitle className="text-sm">Upload project ZIP</CardTitle>
              </div>
              <CardDescription>
                Upload a compressed archive of your codebase.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Input
                type="file"
                accept=".zip"
                onChange={(e) => setZipFile(e.target.files?.[0] ?? null)}
              />

              {zipFile && (
                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="font-medium">{zipFile.name}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* GITHUB */}
          <Card className="group border bg-background/70 transition hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-primary" />
                <CardTitle className="text-sm">GitHub repository</CardTitle>
              </div>
              <CardDescription>
                Paste a public or private repository URL.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Input
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/org/repository"
              />
            </CardContent>
          </Card>
        </CardContent>

        <Separator />

        {/* CTA */}
        <CardFooter className="flex flex-col items-center gap-5 py-10">
          <Button
            size="lg"
            disabled={!canGenerate || isGenerating}
            onClick={handleGenerate}
            className="
              relative rounded-full px-14 py-6 text-sm font-semibold
              bg-primary text-primary-foreground
              transition-all
              hover:scale-[1.03]
              hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] flex gap-2
            "
          >
            {isGenerating ? (
              <>
                <Spinner /> {"  "}
                Generating documentation…
              </>
            ) : (
              <>
                <FileText className="h-4 w-4" />
                Generate documentation
              </>
            )}
          </Button>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Badge variant="secondary">Secure</Badge>
            <span>No training on your code · No public indexing</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChatGenerateDocs;
