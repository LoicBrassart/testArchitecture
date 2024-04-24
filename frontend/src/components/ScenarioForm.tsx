import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BsQuestionOctagonFill } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";

const poiSchema = z.object({
  code: z.string().min(2).max(5),
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
});

const mapSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
  picture: z.string().min(2).max(50),
  pois: z.array(poiSchema),
});

const scenarioSchema = z.object({
  title: z.string().min(2).max(50),
  teaser: z.string().min(2).max(50),
  fullStory: z.string().min(2).max(50),
  bannerUrl: z.string().min(2).max(50),
  credits: z.string().min(2).max(50),
  maps: z.array(mapSchema),
});

export default function ScenarioForm() {
  const form = useForm<z.infer<typeof scenarioSchema>>({
    resolver: zodResolver(scenarioSchema),
    defaultValues: {
      title: "",
      teaser: "",
      fullStory: "",
      bannerUrl: "",
      credits: "",
      maps: [],
    },
  });

  function onSubmit(values: z.infer<typeof scenarioSchema>) {
    console.log(values);
  }

  return (
    <>
      <h1>Creation d&apos;un Scenario</h1>
      <div className="w-3/4 m-auto border p-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <TooltipProvider>
              <FormField
                key="title"
                control={form.control}
                name="title"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>
                        Titre
                        <Tooltip>
                          <TooltipTrigger className="m-1">
                            <BsQuestionOctagonFill />
                          </TooltipTrigger>
                          <TooltipContent>Le titre du scenario</TooltipContent>
                        </Tooltip>
                        <FormControl>
                          <Input placeholder="Le Camp Gobelin" {...field} />
                        </FormControl>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                key="teaser"
                control={form.control}
                name="teaser"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Teaser
                      <Tooltip>
                        <TooltipTrigger className="m-1">
                          <BsQuestionOctagonFill />
                        </TooltipTrigger>
                        <TooltipContent>
                          Une courte description pour donner aux éventuels
                          lecteurs l&apos;envie de découvrir ce scénario.
                          Attention à ne pas trop spoiler l&apos;histoire !
                        </TooltipContent>
                      </Tooltip>
                      <FormControl>
                        <Input
                          placeholder="Des enfants ont disparu dans un petit village forestier, aidez à les retrouver !"
                          {...field}
                        />
                      </FormControl>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                key="illustration"
                control={form.control}
                name="bannerUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Illustration
                      <Tooltip>
                        <TooltipTrigger className="m-1">
                          <BsQuestionOctagonFill />
                        </TooltipTrigger>
                        <TooltipContent>
                          Attention au spoil accidentel sur l&apos;illustration
                          !
                        </TooltipContent>
                      </Tooltip>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                key="credits"
                control={form.control}
                name="credits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Credits
                      <Tooltip>
                        <TooltipTrigger className="m-1">
                          <BsQuestionOctagonFill />
                        </TooltipTrigger>
                        <TooltipContent>
                          Merci de lister l&apos;auteur et lesite de provenance
                          du scenario s&apos;il est connu
                        </TooltipContent>
                      </Tooltip>
                      <FormControl>
                        <Input placeholder="Une illustre inconnue" {...field} />
                      </FormControl>
                    </FormLabel>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                key="fullStory"
                control={form.control}
                name="fullStory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      L&apos;histoire
                      <Tooltip>
                        <TooltipTrigger className="m-1">
                          <BsQuestionOctagonFill />
                        </TooltipTrigger>
                        <TooltipContent>
                          C&apos;est ici que devrait se trouver l&apos;histoire
                          détaillée. Ce champ ne sera *pas* visible pour les
                          visiteurs, pas de risque de spoil !
                        </TooltipContent>
                      </Tooltip>
                      <FormControl>
                        <Textarea
                          placeholder={`Des gobelins kidnappent des enfants pour en faire de la main d'oeuvre à vil coût.\n\t@ pour lister des PNJ\n\t# pour lister des lieux\n\t% pour lister des monstres`}
                          {...field}
                        />
                      </FormControl>
                    </FormLabel>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </TooltipProvider>
            <Button type="submit">Enregistrer</Button>
          </form>
        </Form>
      </div>
    </>
  );
}
