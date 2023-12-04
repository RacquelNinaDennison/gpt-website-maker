import {
	gptGeneratorRequest,
	gptGeneratorResponse,
} from "@/types/gptGeneratorTypes";
import { UseMutationResult } from "@tanstack/react-query";

interface BlogPostProps {
	createTemplate: UseMutationResult<
		gptGeneratorResponse,
		Error,
		gptGeneratorRequest,
		unknown
	>;
}

export default BlogPostProps;
