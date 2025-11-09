import { IconType } from "react-icons";
import { TbCoins, TbClock, TbFlame, TbBolt, TbDropletFilled } from "react-icons/tb";

export type TokenRow = {
  id: string;
  name: string;            
  subtitle?: string;       
  age: string;            
  statsIcons?: IconType[]; 
  mc: string;              
  val: string;             
  fee?: string;            
  chainPill?: string;      
  changeBadges?: {label:string;color:"good"|"bad"|"warn"|"muted"}[];
};

const baseBadges = [
  { label: "0%",  color: "good" as const },
  { label: "0%",  color: "good" as const },
  { label: "0%",  color: "good" as const },
  { label: "0%",  color: "muted" as const },
];

const I = { coins: TbCoins, clock: TbClock, flame: TbFlame, bolt: TbBolt, drop: TbDropletFilled };

export const newPairs: TokenRow[] = [
  {
    id: "stog", name: "STOGCOIN", subtitle: "6DxZ...pump", age: "7s",
    statsIcons: [I.coins, I.clock, I.flame], mc: "$4.42K", val: "$16", chainPill: "0 SOL", changeBadges: baseBadges
  },
  {
    id: "stog", name: "STOGCOIN", subtitle: "6DxZ...pump", age: "7s",
    statsIcons: [I.coins, I.clock, I.flame], mc: "$4.42K", val: "$16", chainPill: "0 SOL", changeBadges: baseBadges
  },
  {
    id: "stog", name: "STOGCOIN", subtitle: "6DxZ...pump", age: "7s",
    statsIcons: [I.coins, I.clock, I.flame], mc: "$4.42K", val: "$16", chainPill: "0 SOL", changeBadges: baseBadges
  },
  {
    id: "stog", name: "STOGCOIN", subtitle: "6DxZ...pump", age: "7s",
    statsIcons: [I.coins, I.clock, I.flame], mc: "$4.42K", val: "$16", chainPill: "0 SOL", changeBadges: baseBadges
  },
  {
    id: "stog", name: "STOGCOIN", subtitle: "6DxZ...pump", age: "7s",
    statsIcons: [I.coins, I.clock, I.flame], mc: "$4.42K", val: "$16", chainPill: "0 SOL", changeBadges: baseBadges
  },
  {
    id: "stog", name: "STOGCOIN", subtitle: "6DxZ...pump", age: "7s",
    statsIcons: [I.coins, I.clock, I.flame], mc: "$4.42K", val: "$16", chainPill: "0 SOL", changeBadges: baseBadges
  },
  {
    id: "stog", name: "STOGCOIN", subtitle: "6DxZ...pump", age: "7s",
    statsIcons: [I.coins, I.clock, I.flame], mc: "$4.42K", val: "$16", chainPill: "0 SOL", changeBadges: baseBadges
  },
  {
    id: "stog", name: "STOGCOIN", subtitle: "6DxZ...pump", age: "7s",
    statsIcons: [I.coins, I.clock, I.flame], mc: "$4.42K", val: "$16",
    chainPill: "0 SOL", changeBadges: baseBadges
  },
  {
    id: "stog", name: "STOGCOIN", subtitle: "6DxZ...pump", age: "7s",
    statsIcons: [I.coins, I.clock, I.flame], mc: "$4.42K", val: "$16", chainPill: "0 SOL", changeBadges: baseBadges
  },
  {
    id: "stog", name: "STOGCOIN", subtitle: "6DxZ...pump", age: "7s",
    statsIcons: [I.coins, I.clock, I.flame], mc: "$4.42K", val: "$16", chainPill: "0 SOL", changeBadges: baseBadges
  },
  {
    id: "stog", name: "STOGCOIN", subtitle: "6DxZ...pump", age: "7s",
    statsIcons: [I.coins, I.clock, I.flame], mc: "$4.42K", val: "$16", chainPill: "0 SOL", changeBadges: baseBadges
  },
  {
    id: "stog", name: "STOGCOIN", subtitle: "6DxZ...pump", age: "7s",
    statsIcons: [I.coins, I.clock, I.flame], mc: "$4.42K", val: "$16", chainPill: "0 SOL", changeBadges: baseBadges
  },


];


export const finalStretch: TokenRow[] = [
  { id:"NOAI", name:"NOAI SUPPOR", subtitle:"Dfaz...pump", age:"8h", statsIcons:[I.clock], mc:"$26.7K", val:"$13K",  chainPill:"0 SOL", changeBadges: baseBadges },
  { id:"NOAI", name:"NOAI SUPPOR", subtitle:"Dfaz...pump", age:"8h", statsIcons:[I.clock], mc:"$26.7K", val:"$13K",  chainPill:"0 SOL", changeBadges: baseBadges },
  { id:"NOAI", name:"NOAI SUPPOR", subtitle:"Dfaz...pump", age:"8h", statsIcons:[I.clock], mc:"$26.7K", val:"$13K",  chainPill:"0 SOL", changeBadges: baseBadges },

  { id:"NOAI", name:"NOAI SUPPOR", subtitle:"Dfaz...pump", age:"8h", statsIcons:[I.clock], mc:"$26.7K", val:"$13K",  chainPill:"0 SOL", changeBadges: baseBadges },
  { id:"NOAI", name:"NOAI SUPPOR", subtitle:"Dfaz...pump", age:"8h", statsIcons:[I.clock], mc:"$26.7K", val:"$13K",  chainPill:"0 SOL", changeBadges: baseBadges },
  { id:"NOAI", name:"NOAI SUPPOR", subtitle:"Dfaz...pump", age:"8h", statsIcons:[I.clock], mc:"$26.7K", val:"$13K",  chainPill:"1 SOL", changeBadges: baseBadges },
  { id:"NOAI", name:"NOAI SUPPOR", subtitle:"Dfaz...pump", age:"8h", statsIcons:[I.clock], mc:"$26.7K", val:"$13K",  chainPill:"0 SOL", changeBadges: baseBadges },
  { id:"NOAI", name:"NOAI SUPPOR", subtitle:"Dfaz...pump", age:"8h", statsIcons:[I.clock], mc:"$26.7K", val:"$13K",  chainPill:"0 SOL", changeBadges: baseBadges },
  { id:"NOAI", name:"NOAI SUPPOR", subtitle:"Dfaz...pump", age:"8h", statsIcons:[I.clock], mc:"$26.7K", val:"$13K",  chainPill:"0 SOL", changeBadges: baseBadges },
  { id:"NOAI", name:"NOAI SUPPOR", subtitle:"Dfaz...pump", age:"8h", statsIcons:[I.clock], mc:"$26.7K", val:"$13K",  chainPill:"0 SOL", changeBadges: baseBadges },
  { id:"NOAI", name:"NOAI SUPPOR", subtitle:"Dfaz...pump", age:"8h", statsIcons:[I.clock], mc:"$26.7K", val:"$13K",  chainPill:"0 SOL", changeBadges: baseBadges },
  { id:"NOAI", name:"NOAI SUPPOR", subtitle:"Dfaz...pump", age:"8h", statsIcons:[I.clock], mc:"$26.7K", val:"$13K",  chainPill:"0 SOL", changeBadges: baseBadges },
  { id:"NOAI", name:"NOAI SUPPOR", subtitle:"Dfaz...pump", age:"8h", statsIcons:[I.clock], mc:"$26.7K", val:"$13K",  chainPill:"0 SOL", changeBadges: baseBadges },
  
];

export const migrated: TokenRow[] = [
  { id:"supp", name:"American", subtitle:"9964...iqMf", age:"15s", statsIcons:[I.coins], mc:"$92.5K", val:"$24K",  chainPill:"0 SOL",
    changeBadges:[{label:"100%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"},{label:"19%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"}] },
  { id:"supp", name:"American", subtitle:"9964...iqMf", age:"15s", statsIcons:[I.coins], mc:"$92.5K", val:"$24K",  chainPill:"0 SOL",
    changeBadges:[{label:"100%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"},{label:"19%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"}] },
  { id:"supp", name:"American", subtitle:"9964...iqMf", age:"15s", statsIcons:[I.coins], mc:"$92.5K", val:"$24K",  chainPill:"0 SOL",
    changeBadges:[{label:"100%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"},{label:"19%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"}] },
    { id:"supp", name:"American", subtitle:"9964...iqMf", age:"15s", statsIcons:[I.coins], mc:"$92.5K", val:"$24K",  chainPill:"0 SOL",
    changeBadges:[{label:"100%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"},{label:"19%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"}] },
    { id:"supp", name:"American", subtitle:"9964...iqMf", age:"15s", statsIcons:[I.coins], mc:"$92.5K", val:"$24K",  chainPill:"0 SOL",
    changeBadges:[{label:"100%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"},{label:"19%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"}] },
    { id:"supp", name:"American", subtitle:"9964...iqMf", age:"15s", statsIcons:[I.coins], mc:"$92.5K", val:"$24K",  chainPill:"0 SOL",
    changeBadges:[{label:"100%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"},{label:"19%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"}] },
    { id:"supp", name:"American", subtitle:"9964...iqMf", age:"15s", statsIcons:[I.coins], mc:"$92.5K", val:"$24K",  chainPill:"0 SOL",
    changeBadges:[{label:"100%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"},{label:"19%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"}] },
    { id:"supp", name:"American", subtitle:"9964...iqMf", age:"15s", statsIcons:[I.coins], mc:"$92.5K", val:"$24K",  chainPill:"0 SOL",
    changeBadges:[{label:"100%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"},{label:"19%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"}] },
    { id:"supp", name:"American", subtitle:"9964...iqMf", age:"15s", statsIcons:[I.coins], mc:"$92.5K", val:"$24K",  chainPill:"0 SOL",
    changeBadges:[{label:"100%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"},{label:"19%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"}] },
    { id:"supp", name:"American", subtitle:"9964...iqMf", age:"15s", statsIcons:[I.coins], mc:"$92.5K", val:"$24K",  chainPill:"0 SOL",
    changeBadges:[{label:"100%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"},{label:"19%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"}] },
    { id:"supp", name:"American", subtitle:"9964...iqMf", age:"15s", statsIcons:[I.coins], mc:"$92.5K", val:"$24K",  chainPill:"0 SOL",
    changeBadges:[{label:"100%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"},{label:"19%",color:"bad"},{label:"0%",color:"good"},{label:"0%",color:"good"}] },
];
