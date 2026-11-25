CREATE TABLE `activities` (
	`id` text PRIMARY KEY NOT NULL,
	`owner_id` text NOT NULL,
	`lead_id` text,
	`type` text NOT NULL,
	`description` text NOT NULL,
	`metadata` text DEFAULT '{}' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `leads` (
	`id` text PRIMARY KEY NOT NULL,
	`owner_id` text NOT NULL,
	`company` text NOT NULL,
	`contact` text DEFAULT '' NOT NULL,
	`phone` text DEFAULT '' NOT NULL,
	`email` text DEFAULT '' NOT NULL,
	`website` text DEFAULT '' NOT NULL,
	`niche` text DEFAULT 'Outros' NOT NULL,
	`city` text DEFAULT '' NOT NULL,
	`stage` text DEFAULT 'Novo lead' NOT NULL,
	`priority` text DEFAULT 'Média' NOT NULL,
	`score` integer DEFAULT 50 NOT NULL,
	`potential_cents` integer DEFAULT 0 NOT NULL,
	`pagespeed` integer,
	`ranking` integer,
	`source` text DEFAULT 'Cadastro manual' NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`do_not_contact` integer DEFAULT false NOT NULL,
	`is_demo` integer DEFAULT false NOT NULL,
	`last_contact_at` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `leads_owner_company_city_unique` ON `leads` (`owner_id`,`company`,`city`);--> statement-breakpoint
CREATE TABLE `meetings` (
	`id` text PRIMARY KEY NOT NULL,
	`owner_id` text NOT NULL,
	`lead_id` text,
	`title` text NOT NULL,
	`starts_at` text NOT NULL,
	`status` text DEFAULT 'Agendada' NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`is_demo` integer DEFAULT false NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `proposals` (
	`id` text PRIMARY KEY NOT NULL,
	`owner_id` text NOT NULL,
	`lead_id` text,
	`title` text NOT NULL,
	`service` text NOT NULL,
	`amount_cents` integer NOT NULL,
	`status` text DEFAULT 'Rascunho' NOT NULL,
	`valid_until` text,
	`is_demo` integer DEFAULT false NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` text PRIMARY KEY NOT NULL,
	`owner_id` text NOT NULL,
	`lead_id` text,
	`title` text NOT NULL,
	`due_at` text,
	`priority` text DEFAULT 'Média' NOT NULL,
	`status` text DEFAULT 'Pendente' NOT NULL,
	`is_demo` integer DEFAULT false NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `transactions` (
	`id` text PRIMARY KEY NOT NULL,
	`owner_id` text NOT NULL,
	`lead_id` text,
	`description` text NOT NULL,
	`amount_cents` integer NOT NULL,
	`kind` text DEFAULT 'Receita' NOT NULL,
	`status` text DEFAULT 'Pendente' NOT NULL,
	`due_date` text,
	`is_demo` integer DEFAULT false NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
